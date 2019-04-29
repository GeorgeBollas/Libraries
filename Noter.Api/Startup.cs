using FluentValidation.AspNetCore;
using MediatR;
using MediatR.Pipeline;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Noter.Api.SignalR;
using Noter.Application.Infrastructure;
using Noter.Application.Infrastructure.CommandLogging;
using Noter.Application.Libraries.Commands.CreateLibrary;
using Noter.Persistance;
using Serilog;
using System;
using System.Reflection;

namespace Noter.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(configuration).CreateLogger();

            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
 
            services.AddTransient(typeof(IRequestPostProcessor<,>), typeof(CommandLoggingPipeline<,>));

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationPipeline<,>));

            services.AddSwaggerDocument();

            services.AddMediatR(
                typeof(CreateLibraryCommandHandler).GetTypeInfo().Assembly,
                Assembly.GetExecutingAssembly()
                );  //point to the assemby to look for handlers

            // Add DbContext using SQL Server Provider
            services.AddDbContext<NoterDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("NoterDatabase")));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<CreateLibraryCommandValidator>());

            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddSerilog(); // <-- Add this line

            if (env.IsDevelopment() || env.IsEnvironment("VM"))
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSwagger();
            app.UseSwaggerUi3();

            //note: AllowCredentials required for SignalR (even if not used)

            //todo: may have to merge this project (API) with Angular project (Client) so that can allow any origin
            //question: how can we have multiple clients then??
            app.UseCors(builder =>
                builder
                .WithOrigins("http://localhost:64338", "https://localhost:64338")
                //.AllowAnyOrigin()
                .AllowAnyMethod().AllowAnyHeader().AllowCredentials());

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSignalR(route =>
            {
                route.MapHub<LibrariesHub>("/librarieshub");
            });
        }
    }
}

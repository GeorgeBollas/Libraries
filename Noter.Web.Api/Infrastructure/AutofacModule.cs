using Autofac;
using Noter.Application.Interfaces;
using Noter.Application.Libraries.Queries;
using Noter.Application.Libraries.Queries.GetLibraryList;
using Noter.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Noter.Web.Api.Infrastructure
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(typeof(GetLibraryListQueryHandler).Assembly)
                .Where(x => x.Name.EndsWith("Command") || x.Name.EndsWith("Query") || x.Name.EndsWith("Service"))
                .AsImplementedInterfaces();

            builder.RegisterType<NotficationService>().As<INotificiationService>();
        }
    }
}

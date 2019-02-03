using Microsoft.EntityFrameworkCore;
using Noter.Persistance.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance
{
    public class NoterDbContextFactory : DesignTimeDbContextFactoryBase<NoterDbContext>
    {

        protected override NoterDbContext CreateNewInstance(DbContextOptions<NoterDbContext> options)
        {
            return new NoterDbContext(options);
        }
    }
}

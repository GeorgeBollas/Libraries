using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Queries
{
    public class LibraryQueries
    {
        //IEnumerable<Library>?????????????????????????? 

        // if we do it this way then it will return library[] which we would then cast to LibraryViewModel
        // extra step that is not desired for performance
        //
        // consider using dapper directly in the Application Layer and only abstract the queries not the execution
        
        // somehow
    }
}

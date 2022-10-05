using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking.DbAccess.Db_Context
{
    public abstract class BaseRepoDbContext
    {
        protected readonly AppDbContext _db;

        public BaseRepoDbContext(AppDbContext context)
        {
            _db = context;
        }
    }
}

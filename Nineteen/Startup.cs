using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Nineteen.Startup))]
namespace Nineteen
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

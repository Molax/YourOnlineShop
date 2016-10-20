using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Trestto.Dashboard.App.Startup))]
namespace Trestto.Dashboard.App
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

using System.Web;
using System.Web.Optimization;

namespace Trestto.Dashboard.App
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-1.10.2.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));


            bundles.Add(new ScriptBundle("~/bundles/dashboard").Include(

                               "~/dashboard/modules/common.module.js",
                           "~/dashboard/app.js",
                           "~/dashboard/services/apiSevice.js",
                      "~/dashboard/home/home.controller.js",
                                        "~/dashboard/home/rootCtrl.js"
           ));


            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                "~/Scripts/Angular/jquery-3.1.1.min.js",
                 "~/Scripts/Angular/angular.min.js",
                 "~/Scripts/Angular/izipie.js",
                 "~/Scripts/Angular/angular.easypiechart.min.js",
                 "~/Scripts/Angular/jquery.easypiechart.fill.js",
                 "~/Scripts/Angular/ngRoute.js",
                 "~/Scripts/Angular/gauge.js",
                 "~/Scripts/Angular/angular-canvas-gauge.js",
                 "~/Scripts/Angular/ui-bootstrap.min.js",
                 "~/Scripts/Angular/angular-perfect-scrollbar.js",
                 "~/Scripts/Angular/calendar.js",
                 "~/Scripts/Angular/loading-bar.js",
                 "~/Scripts/Angular/slider.js",
                 "~/Scripts/Angular/Chart.min.js",
                 "~/Scripts/Angular/easypieChart.js",
                 "~/Scripts/Angular/angular-chart.js",
                 "~/Scripts/Angular/highchart.js",
                 "~/Scripts/Angular/hichchartmore.js",
                 "~/Scripts/Angular/exporting.js",
                   "~/Scripts/Angular/drilldown.js",
                     "~/Scripts/Angular/highdata.js",
                 "~/Scripts/Angular/angular-notify.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                     "~/Content/ui-bootstrap-csp.css",
                      "~/Content/bootstrap.css",
                      "~/Content/angular-chart.css",
                      "~/Content/app.css"));


            bundles.Add(new ScriptBundle("~/bundles/scripts")
            .IncludeDirectory("~/Scripts", "*.js", true).IncludeDirectory("~/Scripts", "*.min.js", true));
        }
    }
}

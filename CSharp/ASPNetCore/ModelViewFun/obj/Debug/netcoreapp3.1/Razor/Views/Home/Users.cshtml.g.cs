#pragma checksum "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/Users.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b06b580524256a9587364041579d96d21d4783d3"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Users), @"mvc.1.0.view", @"/Views/Home/Users.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/_ViewImports.cshtml"
using ModelViewFun;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/_ViewImports.cshtml"
using ModelViewFun.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b06b580524256a9587364041579d96d21d4783d3", @"/Views/Home/Users.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1e14a9e51092a22c5751418f9e9951944e2fae34", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Users : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<User>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/Users.cshtml"
  
    ViewData["Title"] = "Numbers";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            WriteLiteral("\r\n\r\n\r\n\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\">Here are some Users!</h1>\r\n    <ul>\r\n");
#nullable restore
#line 14 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/Users.cshtml"
         foreach (var numbers in Model)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <li>");
#nullable restore
#line 16 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/Users.cshtml"
       Write(numbers.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 16 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/Users.cshtml"
                          Write(numbers.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</li>\r\n");
#nullable restore
#line 17 "/Users/noahbiggs/Documents/CodingDojo/WebFund/PushToGitHub/CSharp/ASPNetCore/ModelViewFun/Views/Home/Users.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("    </ul>\r\n    \r\n    \r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<User>> Html { get; private set; }
    }
}
#pragma warning restore 1591

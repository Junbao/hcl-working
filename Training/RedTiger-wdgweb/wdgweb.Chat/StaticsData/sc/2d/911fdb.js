/*/#source 1 1 wdgweb\wdgweb.Chat\Content\Js\Modules\Chat\Chat.js FILESTART*/
/// <summary>Implements the hello world message behavior</summary>
/// <param name="jquery">jQuery</param>
/// <param name="jqBehavior">The jqBehavior module</param>
/// <returns type="object">Sample behavior instance with setup and teardown interface</returns>
require(["jquery", "document", "domReady!"], function ($, document) {
    /// <summary>Create the sample module behavior.</summary>
    /// <param name="$elem">The sample element to which the behavior is bound.</param>
    /// <param name="settings">The settings object.</param>
    /// <returns type="object">Object with setup and teardown functions.</returns>
    $(document)
        .on("click",
            ".helloworld",
            function () {
                var $elem = $(this);
                alert("<" + $elem[0].tagName + " class=\"" + $elem.attr("class") + "\"> clicked");
            });
});
/*/#source 1 1 wdgweb\wdgweb.Chat\Content\Js\Modules\Chat\Chat.js FILEEND*/

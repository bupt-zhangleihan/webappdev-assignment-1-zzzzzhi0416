$(() => {
    var list = ["张三","李四","王五","李明"]
    $("#start").click(function (e) {
        e.preventDefault();
        for (let index = 0; index < 100; index++){
            setTimeout(() => {
                var r = Math.floor(Math.random()*list.length)
                $("#target").text(list[r]);
            },30 * index
            )
        }
    } );
})
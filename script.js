function renderTable() {
    var table = '<table class="tbl" border="1" cellpadding="0" cellspacing="0">';
    for (i = 1; i <= 3; i++) {
        table += "<tr>";
        for (j = 1; j <= 3; j++) {
            table += "<td>";
            var img = ((i - 1) * 3) + j + ".jpg";
            table += "<img class='img' src='" + img + "' onclick=bigImage('" + img + "')>";
            table += "</td>";
        }
        table += "</tr>";
    }
    table += '</table>';
    return table;
}
var tb = renderTable();
$('.pix').append(tb);

var current;

function bigImage(img) {
    $('.pix').empty();
    var image = img;
    current = img;
    $('.pix').append("<img src='" + image + "' class='big-img'><br /><button onclick='prev()'>Prev</button><button onclick='home()'>Home</button><button onclick='next()'>Next</button>");
}
function home() {
    $('.pix').empty();
    $('.pix').append(renderTable());
}
function next() {
    var now = current.substring(0, 1);
    now = Number(now);
    if (now < 9)
        now = now + 1;
    else
        now = 1;
    var imgNext = now + ".jpg";
    bigImage(imgNext);
}
function prev() {
    var now = current.substring(0, 1);
    now = Number(now);
    if (now > 1)
        now = now - 1;
    else
        now = 9;
    var imgNext = now + ".jpg";
    bigImage(imgNext);
}
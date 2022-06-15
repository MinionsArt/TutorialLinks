function showAllPosts() {

    var i = 0;
    for (let i = 0; i < tutorials.posts.length; i++) {
        var iDiv = test.content.cloneNode(true);
        document.getElementById("output").appendChild(iDiv);

        // elem.append(newDiv); // (*)

        fillPost(tutorials.posts[i].id);

    };



}

function showfilter(type) {
    var list = new Array();
    var textvalue;
    document.getElementById("output").innerHTML = '';
    for (let i = 0; i < tutorials.posts.length; i++) {
        for (let j = 0; j < tutorials.posts[i].types.length; j++) {
            if (type == tutorials.posts[i].types[j].slug) {
                if (!isInArray(list, tutorials.posts[i].id)) {
                    list.push(tutorials.posts[i].id);
                }

            }
        }
    }

    for (let i = 0; i < list.length; i++) {
        var iDiv = test.content.cloneNode(true);
        document.getElementById("output").appendChild(iDiv);

        // elem.append(newDiv); // (*)

        fillPost(list[i]);

    };
}


function searchData() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    output = document.getElementById("searchOutput");
    output.innerHTML = "";


    filter = input.value.toUpperCase();
    // var test = filter.replace(' ', "_");
    searchUnits(filter);

}

function searchUnits(keyword) {
    var i, output, textvalue, j, l, result = "";

    var fields = keyword.split(' ', 3);
    var list = new Array();
    document.getElementById("output").innerHTML = '';

    for (let i = 0; i < tutorials.posts.length; i++) {
        textvalue = tutorials.posts[i].title;
        if (textvalue.toUpperCase().indexOf(fields[0]) > -1) {
            if (!isInArray(list, tutorials.posts[i].id)) {
                list.push(tutorials.posts[i].id);
            }
        }
        textvalue = tutorials.posts[i].description;
        if (textvalue.toUpperCase().indexOf(fields[0]) > -1) {
            if (!isInArray(list, tutorials.posts[i].id)) {
                list.push(tutorials.posts[i].id);
            }
        }
        for (let j = 0; j < tutorials.posts[i].tags.length; j++) {
            if (fields[0] == tutorials.posts[i].tags[j].slug.toUpperCase()) {
                if (!isInArray(list, tutorials.posts[i].id)) {
                    list.push(tutorials.posts[i].id);
                }

            }
        }
    }
    for (let i = 0; i < list.length; i++) {
        var iDiv = test.content.cloneNode(true);
        document.getElementById("output").appendChild(iDiv);

        // elem.append(newDiv); // (*)

        fillPost(list[i]);

    };

}

function isInArray(array, search) {
    return array.indexOf(search) >= 0;
}



function fillPost(id) {

    for (let i = 0; i < tutorials.posts.length; i++) {
        if (id == tutorials.posts[i].id) {
            a = tutorials.posts[i];
            var title, icon, date, description, mainlink, type, background = "";

            //title
            title = document.getElementById("title");
            title.innerHTML = a.title;
            title.setAttribute("id", "title" + a.id);

            // background image
            //   icon = document.getElementById("previewimage")
            // icon.innerHTML = "<a href=" + a.link + ">";

            // icon.setAttribute("style", "background-image: url(" + "/tutorials/Images/Previews/" + a.id + ".jpg");


            //  icon.setAttribute("id", "previewimage" + a.id);

            background = document.getElementById("linkBackground");

            background.setAttribute("href", a.link);

            background.setAttribute("id", "linkBackground" + a.id);
            background.setAttribute("style", "background-image: url(" + "/tutorials/Images/Thumbnails/" + a.id + ".jpg");
            // date

            date = document.getElementById("postdate");
            date.innerHTML = a.date;
            date.setAttribute("id", "postdate" + a.id);
            // description
            description = document.getElementById("postdescription");
            description.innerHTML = a.description;
            description.setAttribute("id", "postdescription" + a.id);


            extralink = document.getElementById("extralink");
            if (a.extralink != "") {
                extralink.setAttribute("href", a.extralink);
                extralink.innerHTML = a.extralink_description;


            } else {
                extralink.innerHTML = "";
            }
            extralink.setAttribute("id", "extralink" + a.id);

            patreonlink = document.getElementById("patreonlink");

            if (a.patreonlink != "") {
                patreonlink.setAttribute("href", a.patreonlink);
                patreonlink.innerHTML = "<Patreon></Patreon>  Source Files ($10 Tier)";

            } else {
                patreonlink.innerHTML = "";
            }
            patreonlink.setAttribute("id", "patreonlink" + a.id);

            // type
            type = document.getElementById("type");
            for (let i = 0; i < a.types.length; i++) {
                console.log("Done number " + i);
                var typeDiv = document.createElement("DIV");
                typeDiv.className = "typefilter";

                switch (a.types[i].slug) {
                    case "built-in":

                        typeDiv.setAttribute("style", "background-color: #416eb3; border: 2px solid #8193ff;")

                        typeDiv.innerHTML = "Built-In";



                        break;

                    case "3d":

                        typeDiv.setAttribute("style", "background-color: #c31f8b; border: 2px solid #ff00f6;")

                        typeDiv.innerHTML = "3D";

                        break;

                    case "other":

                        typeDiv.setAttribute("style", "background-color: #666666; border: 2px solid #bdbdbd;")

                        typeDiv.innerHTML = "Other";

                        break;

                    case "gameplay":

                        typeDiv.setAttribute("style", "background-color: #ca9243; border: 2px solid #ffc470;")

                        typeDiv.innerHTML = "Gameplay";

                        break;
                    case "shader-graph":

                        typeDiv.setAttribute("style", "background-color: #5ad2b7; border: 2px solid #92ffe7;")

                        typeDiv.innerHTML = "Shader Graph";

                        break;
                    case "urp":

                        typeDiv.setAttribute("style", "background-color: #5ecd68; border: 2px solid #91ff9b;")

                        typeDiv.innerHTML = "URP";

                        break;
                    case "asset-pack":

                        typeDiv.setAttribute("style", "background-color: #8d48cd; border: 2px solid #be79ff;")

                        typeDiv.innerHTML = "Asset Pack";

                        break;
                    case "design":

                        typeDiv.setAttribute("style", "background-color: #3c422f; border: 2px solid #999c91;")

                        typeDiv.innerHTML = "Design";

                        break;
                }
                type.appendChild(typeDiv);


            }

            type.setAttribute("id", "type" + a.id);


        }
    }
}

app.filter("myFilter", function () {
    return function (input, searchText, AND_OR) {
        console.log(1);
        console.log('input = ' + JSON.stringify(input));
        console.log('searchText = ' + JSON.stringify(searchText));
        console.log('AND_OR= ' + JSON.stringify(AND_OR));

        var returnArray = [],
            // Split on single or multi space
            splitext = searchText.toLowerCase().split(/\s+/),
            // Build Regexp with Logical AND using "look ahead assertions"
            regexp_and = "(?=.*" + splitext.join(")(?=.*") + ")",
            // Build Regexp with logicial OR
            regexp_or = searchText.toLowerCase().replace(/\s+/g, "|"),
            // Compile the regular expression
            re = new RegExp((AND_OR == "AND") ? regexp_and : regexp_or, "i");

        for (var x = 0; x < input.length; x++) {
            if (re.test(input[x])) returnArray.push(input[x]);
            console.log(input[x]);
        }
        return returnArray;
    }
});


// app.filter('slug', function () {
//     return function (input) {
//       if (input) {
//         console.log('got here');
//         return input.toLowerCase().replace(/[^a-z_]/g, '_');
//       }
//     };
//   });

// app.filter('multiSearch', function() { //provides single-search-box multi-term search functionality
//         return function (objects, searchValues, delimiter) {
//             if (!delimiter) {
//                 delimiter=" ";
//             }
//             if (searchValues) {
//                 var good = Array(0); //the list of objects that match ALL terms
//                 var terms = String(searchValues).toUpperCase().split(delimiter);
//                 for (var w = 0; w < terms.length; w++) {
//                     terms[w] = terms[w].replace(/^\s+|\s+$/g,"");
//                 }
//                 var truthArray = Array(terms.length); //the truth array matches 1 to 1 to the terms. If an element in the truthArray is 0, the corresponding term wasn't found
//                 for (var j = 0; j < objects.length; j++) { //iterates through each object
//                     for (var t = 0; t < objects.length; t++) {
//                         truthArray[t] = 0; //initializes/resets the truthArray
//                     }
//                     for (var i = 0; i < terms.length; i++) {
//                         if (objects[j].attribute1) {
//                             if (String(objects[j].attribute1).toUpperCase().indexOf(terms[i]) != -1) {
//                                 truthArray[i] = 1;
//                             }
//                         }
//                         if (truthArray[i] != 1 && objects[j].attribute2) {
//                             if (String(objects[j].attribute2).toUpperCase().indexOf(terms[i]) != -1) {
//                                 truthArray[i] = 1;
//                             }
//                         }
//                         if (truthArray[i] != 1 && objects[j].attribute3) {
//                             if (String(objects[j].attribute3).toUpperCase().indexOf(terms[i]) != -1) {
//                                 truthArray[i] = 1;
//                             }
//                         }
//                     }
//                     if (truthArray.indexOf(0) == -1) { //if there are no 0s, all terms are present and the object is good
//                         good.push(objects[j]); //add the object to the good list
//                     }
//                 }
//                 return good; //return the list of matching objects
//             }
//             else { //if there are no terms, return all objects
//                 return objects;
//             }
//         }
//     });
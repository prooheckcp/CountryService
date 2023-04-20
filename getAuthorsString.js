/*
  Simple method I did to generate the authors text
*/
const getAuthorsString = (authors) => {
    let finalString = ""
  
    authors.forEach((authorName, index) => {
        if (index == authors.length - 1 && authors.length > 1)
        finalString += " and";
        else if(index > 0)
        finalString += ",";

        if(index == 0)
            finalString += authorName + " ";
        else
        finalString += " " + authorName;
    });

    return finalString
}

module.exports = getAuthorsString
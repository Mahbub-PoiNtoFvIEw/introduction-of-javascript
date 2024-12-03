
// write a function to find the longest word in a given string

function largest(str){
    const words = str.trim().split(/\s+/);
    let max = [];
    for(const item of words){
        if(item.length > max.length){
            max=item;
        }
    }
    return 'Longest string is : ' + max;
}
const str = 'I am learning programming to become a programmer';
console.log(largest(str));
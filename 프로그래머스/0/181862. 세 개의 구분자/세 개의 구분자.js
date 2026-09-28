function solution(myStr) {
    const result = myStr.split(/[abc]/).filter((v) => v !== '');
    
    return result.length ? result : ["EMPTY"];
}
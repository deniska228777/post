export function pages(totCount, limit) {
    return Math.ceil(totCount / limit);
};
export function pgsgArray(totPages) {
    let res = [];
    for (let c=0; c<totPages; c++){
        res.push(c+1);
    };
    return res;
};

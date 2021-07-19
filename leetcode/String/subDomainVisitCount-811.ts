/**
 * https://leetcode.com/problems/subdomain-visit-count/
 * 
 */
function subdomainVisits(cpdomains: string[]): string[] {
    const _subDomain: { [key: string]: number } = {};
    cpdomains.forEach(domain => {
        const a = domain.split(' ');    
        const b = a[1].split('.');
        const lengt = b.length;
        for (let i = 0; i < lengt; i++) {
            const text = b.join('.');
            if(!_subDomain[text]){
                _subDomain[text] = parseInt(a[0]);
            }else {
                _subDomain[text] = _subDomain[text] + parseInt(a[0]);
            }
            b.shift();
        }
    })
    const result: string[] = [];
    Object.keys(_subDomain).forEach(key => {
        result.push(`${_subDomain[key]} ${key}`)
    })
    return result;
};
console.log(subdomainVisits(["9001 discuss.leetcode.com", "1 yahoo.com"]));

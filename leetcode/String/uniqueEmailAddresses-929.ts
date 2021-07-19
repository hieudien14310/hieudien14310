/**
 * https://leetcode.com/problems/unique-email-addresses/
 * 
 */
function numUniqueEmails(emails: string[]): number {
    const result: Set<string> = new Set();
    let i: number = 0;
    while (i < emails.length) {
        const [localName, domainName]: string[] = emails[i].split('@');
        const validEmailName = localName.split('+')[0].split('.').join('');
        result.add(validEmailName + '@' + domainName);
        i++;
    }
    return result.size;
};
console.log(numUniqueEmails(["+a+b+c+d@leetcode.com","b@leetcode.com","c@leetcode.com"]));

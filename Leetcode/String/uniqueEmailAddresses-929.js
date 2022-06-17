"use strict";
/**
 * https://leetcode.com/problems/unique-email-addresses/
 *
 */
function numUniqueEmails(emails) {
    const result = new Set();
    let i = 0;
    while (i < emails.length) {
        const [localName, domainName] = emails[i].split('@');
        const validEmailName = localName.split('+')[0].split('.').join('');
        result.add(validEmailName + '@' + domainName);
        i++;
    }
    return result.size;
}
;
console.log(numUniqueEmails(["+a+b+c+d@leetcode.com", "b@leetcode.com", "c@leetcode.com"]));

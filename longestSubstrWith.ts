function lengthOfLongestSubstring(s: string): number {
    let n = s.length;
    let i=0, j=0, maxi=0;
    while(j<n){
        j++;
        for(let k=i;k<j;k++){
            if(s[j]==s[k]){
                maxi = Math.max(maxi, j-i); 
                i = k+1;
                break;
            }
        }
    }
    maxi = Math.max(maxi, j-i); 
    return maxi;
};

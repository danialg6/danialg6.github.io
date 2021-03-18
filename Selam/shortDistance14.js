function distance(s, w1, w2){ 
    if (w1 .equals( w2) )
        return 0 ;
    let words = s.split(" ");
    let min_dist = (words.length) + 1;
    for (let index = 0;
         index < words.length ; index ++)
    {
  
        if (words[index] .equals( w1))
        {
            for (let search = 0; 
                 search < words.length; search ++) 
            {
                if (words[search] .equals(w2)) 
                {
                    let curr = Math.abs(index - search) - 1; 
                    if (curr < min_dist) 
                    {
                        min_dist = curr ;
                    }
                }
            }
        }
    }

    return min_dist;
}
​
console.log(smallestWordDistance(s, "hello", "world"));
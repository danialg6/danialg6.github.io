function MinimumDistance  
{ 
    let minDist( arr, n, x,  y)  
    
        let i, j; 
        let min_dist = Integer.MAX_VALUE; 
        for (i = 0; i < n; i++)  
        { 
            for (j = i + 1; j < n; j++)  
            { 
                if ((x == arr[i] && y == arr[j] 
                    || y == arr[i] && x == arr[j]) 
                    && min_dist > Math.abs(i - j))  
                    min_dist = Math.abs(i - j); 
            } 
        } 
        return min_dist; 
    } 

describe("My own map", function () {
    beforeEach(function () {
        array = [1,2,3,4,5];
    });

    it("doubles an array of numbers", function () {
        function arrTimesthree(arr) {
            let result=[];
            for(let values of arr){
                result.push(values*3);
            }
            return result;
        }
        assert.deepEqual(myMap(array,arrTimesthree), [3,6,9,12,15]);
       assert.deepEqual(array, [1,2,3,4,5]);  //test for pure function
    });
    });
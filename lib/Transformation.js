/*
 * 
 *  function Template
 *
 *  function transformation_name(points, others){
 *	//points -> array of point of object
 *	//others -> any othee parameters the specific transformation requires
 *
 *	return points;//This is the tranaformed Points
 *  }
 *
 *  example:
 *  	function translation(points, tPoint){
 *  	  //points -> array of point of Object
 *	  //tPoint -> Points to be Translated
 *
 *	  //Do Processing
 *
 *	  return points;//This is translated points
 *	}
 *
 */


function translation(points, pt){
				/* This function translates the object to the new co-ords by pt units */
				for(let p of points){
								let a = [
												[p.x],
												[p.y],
												[1]
								];
								let transMatrix= [
												[1, 0, pt.x],
												[0, 1, pt.y],
												[0, 0, 1]
								];
								let ans = matrixMult(transMatrix, a);

								p.x = ans[0][0];
								p.y = ans[1][0];
				}
				return points;
}

//console.log(translation([{"x": 1, "y":1}],{"x": 1, "y":5}));

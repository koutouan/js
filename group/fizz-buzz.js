'use strict'

/*
 * Create function `fizzBuzz` that print numbers from 1 to 100
 * But for multiples of three, print "Fizz” instead of the number
 * and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 *
 * use console.log to print
 *
 * Français:
 * Créer la fonction `FizzBuzz` qui affiche les nombres de 1 à 100
 * Mais pour les multiples de trois, affiche "Fizz" à la place du nombre
 * et pour les multiples de cinq, affiche "Buzz".
 * Pour les nombres qui sont des multiples de trois et de cinq, affiche "FizzBuzz".
 *
 * Utilisez console.log pour afficher.
 */

const FizzBuzz = a => {
    let ray = 1

    while ( ray <= 100 ) {
        if ( (ray % 3 == 0) & (ray % 5 == 0) ) {
            console.log('FizzBuzz')
        }
        else if ( ray % 3 == 0 ) {
            console.log('Fizz')
        }
        else if ( ray % 5 == 0 ) {
            console.log('Buzz')
        }
        else {
            console.log( ray )
        }
        ray++
    }
}

// You must write your own tests
//throw Error('No tests !')
const assert = require('assert')

assert.strictEqual(typeof FizzBuzz, 'function')
assert.strictEqual(FizzBuzz.length, 1)
assert.deepStrictEqual(FizzBuzz(3, 3), Fizz)
assert.deepStrictEqual(FizzBuzz(5, 5), Buzz)
assert.deepStrictEqual(FizzBuzz(15, 15), FizzBuzz)




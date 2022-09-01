

const email = prompt("Your email address: ")

// "hello.worldcom"    => An email address has to contain a '@' character!
// "he@llo@world.com"  => An email address cannot contain more than one '@' characters!
// "@world.com"        => The username before the '@' character cannot be empty!
// "hello@"            => The domain after the '@' character cannot be empty!
// "hello@worldcom"    => An email address has to contain at least one '.' character!
// "hell.o@worldcom"   => The domain has to contain at least one '.' character!
// "he.llo@worldcom."  => The top-level domain cannot be empty!
// "he.llo@worldco.m"  => The top-level domain has to be at least two characters long!
// ".hello@world.com"  => The username cannot start with a '.' character!
// "he.llo@.world.com" => The domain cannot start with a '.' character!
// "hello@world.com"   => Valid email address :)

const lengthOfEmail = email.length
const numberOfAtCharacters = email.split("@").length - 1
const numberOfDotCharacters = email.split(".").length - 1
const positionOfAt = email.indexOf("@")
const positionOfFirstDot = email.indexOf(".")
const positionOfLastDot = email.lastIndexOf(".")
const positionOfFirstDotAfterTheAt = email.indexOf(".", positionOfAt)

const errorMessageNoAt = "An email address has to contain a '@' character!"
const errorMessageTooManyAt = "An email address cannot contain more than one '@' characters!"
const errorMessageNoUsername = "The username before the '@' character cannot be empty!"
const errorMessageNoDomain = "The domain after the '@' character cannot be empty!"
const errorMessageNoDot = "An email address has to contain at least one '.' character!"
const errorMessageNoDotInDomain = "The domain has to contain at least one '.' character!"
const errorMessageNoTld = "The top-level domain cannot be empty!"
const errorMessageShortTld = "The top-level domain has to be at least two characters long!"
const errorMessageInvalidUsername = "The username cannot start with a '.' character!"
const errorMessageNoServerName = "The domain cannot start with a '.' character!"
const okMessage = "Valid email address :)"

// Validate email here
// Use only the already defined variables!
if (numberOfAtCharacters < 1) console.log(errorMessageNoAt);
if (numberOfAtCharacters > 1) console.log(errorMessageTooManyAt);
if (positionOfAt < 1) console.log(errorMessageNoUsername);
if (positionOfAt == lengthOfEmail - 1) console.log(errorMessageNoDomain);
if (numberOfDotCharacters < 1) console.log(errorMessageNoDot);
if (positionOfFirstDotAfterTheAt < 1) console.log(errorMessageNoDotInDomain);
if (positionOfLastDot == lengthOfEmail - 1) console.log(errorMessageNoTld);
if (positionOfLastDot == lengthOfEmail -3 ) console.log(errorMessageShortTld);
if (positionOfFirstDot == 0) console.log9(errorMessageInvalidUsername);
if (positionOfFirstDotAfterTheAt == positionOfAt + 1) console.log(errorMessageNoServerName);

if (numberOfAtCharacters == 1 && positionOfAt > 0 && positionOfAt !== lengthOfEmail -1 && numberOfDotCharacters > 1 && positionOfFirstDotAfterTheAt > 1 && positionOfLastDot !== lengthOfEmail -1 && positionOfLastDot !== lengthOfEmail -3 && positionOfFirstDot !== 0 && positionOfFirstDotAfterTheAt !== positionOfAt + 1);
console.log(okMessage);
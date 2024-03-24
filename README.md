JWT Authentication
 - Post request- Takes in a username and password and returns a JWT token with the username encoded. And return null if the username is not a valid email or if the password is less than 6 characters using zod library
 - Get request - Takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
 - Get request - Takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

/* Handles authentication using Hawk.

:param hawk_session:
  The hawk session, from the server, encoded as hexadecimal.
  You don't need to set this parameter if you already know the hawk
  credentials (Optional).
:param credentials:
  Python dict containing credentials information, with keys for "id",
  "key" and "algorithm" (Optional).
:param server_url:
  The url of the server, this is useful for hawk when signing the requests.
  In case this is omited, fallbacks to the value of the "Host" header of
  the request (Optional).

Note that the `hawk_session` and `credentials` parameters are mutually
exclusive.  You should set one or the other.*/

String.prototype.hex_decode = function() {
    return this.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
};

function HawkAuth (hawk_session, credentials, server_url, _timestamp) {
	if ((!hawk_session && !credentials) || (hawk_session && credentials)) {
		throw "You should pass either \'hawk_session\' or \'credentials\'";
	}else if (hawk_session) {
		hawk_session = hawk_session.hex_decode();
		keyInfo = "identity.mozilla.com/picl/v1/sessionToken";

	}
}

function HKDF(secret, salt, info, size) {
	
}
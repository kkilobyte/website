#!/bin/sh

echo "fuck_censys.sh v2.4

scripted by kilo
https://kkilo.me


"

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if [ "$(whoami)" = "root" ]; then
	SUPERUSER=""
elif command_exists doas; then
    SUPERUSER="doas"
elif command_exists sudo; then
    SUPERUSER="sudo"
else
	echo "Error: You are not root and \"sudo\" or \"doas\" is not installed. "
    exit 1
fi

if ! command_exists ufw; then
    echo "Error: Uncomplicated Firewall (\"ufw\") is not installed."
    exit 1
fi

#$SUPERUSER ufw deny from 
echo "Blocking Censys IPv4 addresses.

Blocking 162.142.125.0/24."
$SUPERUSER ufw deny from 162.142.125.0/24
echo "
Blocking 167.94.138.0/24."
$SUPERUSER ufw deny from 167.94.138.0/24
echo "
Blocking 167.94.145.0/24."
$SUPERUSER ufw deny from 167.94.145.0/24
echo "
Blocking 167.94.146.0/24."
$SUPERUSER ufw deny from 167.94.146.0/24
echo "
Blocking 167.248.133.0/24."
$SUPERUSER ufw deny from 167.248.133.0/24
echo "
Blocking 199.45.154.0/24."
$SUPERUSER ufw deny from 199.45.154.0/24
echo "
Blocking 199.45.155.0/24."
$SUPERUSER ufw deny from 199.45.155.0/24
echo "
Blocking 206.168.34.0/24."
$SUPERUSER ufw deny from 206.168.34.0/24

echo "

Blocking Censys IPv6 addresses.

Blocking 2602:80d:1000:b0cc:e::/80."
$SUPERUSER ufw deny from 2602:80d:1000:b0cc:e::/80
echo "
Blocking 2620:96:e000:b0cc:e::/80."
$SUPERUSER ufw deny from 2620:96:e000:b0cc:e::/80
echo "
Blocking 2602:80d:1003::/112."
$SUPERUSER ufw deny from 2602:80d:1003::/112
echo "
Blocking 2602:80d:1004::/112."
$SUPERUSER ufw deny from 2602:80d:1004::/112

echo "

All Censys IP addresses should be blocked.
You should block the following Censys user agent in your Nginx/Caddy/Apache2/Httpd configuration.

Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)"

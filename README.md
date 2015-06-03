DragonRealms-Client
===

This is an experiment in creating a [DragonRealms](https://www.play.net/dr/) Client with Node/Atom-Shell.

### Notes about Connections

- [warlock-GTK client notes](https://github.com/sproctor/warlock-gtk/blob/master/docs/SGE-INFO)
- Opened up the Chrome inspector and viewed the source of the http://www.play.net/play/home.asp site while connecting/playing
    - The code is... interesting
    - Uses websocket to hydra.play.net:11025
	- Example communications are saved as frames.ws in test/res folder
	- Sends key from url and client info then gets output
	    - You cannot change `/XML` to `/JSON` (darn)
		- You can change the `/P:WIN_XP` to `/P:NODE_PIRATES` (yay, this will help them block us if we're obnoxious)
		- You can change the version a little too (I tried todays date)
	- Must send `<c>\r\n` twice after `<playerId />` received to continue responses.
	- I have a proof of concept able to connect to by copying a key from a connected URL or .sal file.
- Normal clients like Stormfront and Wizard open a `.sal` file that has connection/key information in it.  An example of this file is saved as `test/res/example.sal`.

### Copyright and Legal

Copyright 2015 Jacob Gable

This project is not affiliated with Dragonrealms or Simutronics.  If anything pisses them off, I'll probably just take it down.  Use the code at your own risk, MIT License.

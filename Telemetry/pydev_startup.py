import ptvsd
import sys
import os

# Assuming that pdvsd is located in the working folder
sys.path.append(os.getcwd())
sys.path.append('C:/Python27/Lib/site-packages')
sys.path.append(os.getenv('USERPROFILE') + 'Google/google_appengine')

# Modify the port number as desired; you're debugging locally so the values don't matter.
# However, be sure the port is not blocked on your computer.
ptvsd.enable_attach(address=('127.0.0.1', 3000), redirect_output=True)
ptvsd.wait_for_attach()

# The debug server has started and you can now use VS Code to attach to the application for debugging
print("Google App Engine has started, ready to attach the debugger")

extra-mobile-events
===================

Enables new events that can be listened to for mobile platform like, (visibilitychange, focus, connectivitychange).


Example
-------

    $(document).on({
    
        /**
         * Triggers when the tab gains or loses focus.
         */
        'visibilitychange': function ()
        {
            if (document.hidden)
            {
                // tab loses focus
                alert('document.hidden');
            }
            else
            {
                // tab gains focus
                alert('document.visible');
            }
        },
        
        /**
         * Triggers when the page gains focus after unlocking the device.
         */
        'focus': function ()
        {
            alert('document.focus');
        },
        
        /**
         * Triggers when the device gains or loses internet connection.
         */
        'connectivitychange': function (e)
        {
            alert(e.isOnline ? 'Online': 'Offline');
        }
    });
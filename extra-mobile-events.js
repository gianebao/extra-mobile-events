(function ($) {
    var status = navigator.onLine ? 'online' : 'offline';
    
    var EventsMobile = {
        tmr: null,
        ts: new Date().getTime(),
        connectStatus: navigator.onLine,
        focus: function ()
        {
            var current = new Date().getTime();
            
            if(current - EventsMobile.ts > 5000)
            {
                $(document).trigger('focus');
            }
            
            EventsMobile.ts = current;
        },
        
        connectity: function ()
        {
            if (EventsMobile.connectStatus !== navigator.onLine)
            {
                $(document).trigger({
                  'type'    : 'connectivitychange',
                  'isOnline': EventsMobile.connectStatus = navigator.onLine
                });
            }
        },
        
        listener: function ()
        {
            if (EventsMobile.tmr)
            {
                clearInterval(EventsMobile.tmr);
            }
            
            EventsMobile.focus();
            EventsMobile.connectity();
        }
    };
    
    EventsMobile.tmr = window.setInterval(EventsMobile.listener, 50);
    
})(jQuery);
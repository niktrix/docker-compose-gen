;(function() {

    var _initialised = false,
        listDiv = document.getElementById("list"),

        connections = [],
        updateConnections = function(conn, remove) {
            console.log("All connections",connections);
            if (!remove) connections.push(conn);
            else {
                var idx = -1;
                for (var i = 0; i < connections.length; i++) {
                    if (connections[i] == conn) {
                        idx = i; break;
                    }
                }
                if (idx != -1) connections.splice(idx, 1);
            }

         };

    jsPlumb.ready(function() {

        var instance = jsPlumb.getInstance({
            DragOptions : { cursor: 'pointer', zIndex:2000 },
            PaintStyle : { strokeStyle:'#666' },
            EndpointStyle : { width:20, height:16, strokeStyle:'#666' },
            Endpoint : "Rectangle",
            Anchors : ["TopCenter", "TopCenter"],
            Container:"playground"
        });

        // suspend drawing and initialise.
        instance.doWhileSuspended(function() {

             instance.bind("connection", function(info, originalEvent) {
                updateConnections(info.connection);
            });
            instance.bind("connectionDetached", function(info, originalEvent) {
                updateConnections(info.connection, true);
            });

            instance.bind("connectionMoved", function(info, originalEvent) {

                updateConnections(info.connection, true);
            });

            // configure some drop options for use by all endpoints.
            var exampleDropOptions = {
                tolerance:"touch",
                hoverClass:"dropHover",
                activeClass:"dragActive"
            };





            var example3Color = "rgba(229,219,61,0.5)";
            var exampleEndpoint3 = {
                endpoint:["Dot", {radius:17} ],
                anchor:"BottomLeft",
                paintStyle:{ fillStyle:example3Color, opacity:0.5 },
                isSource:true,
                scope:'yellow',
                connectorStyle:{ strokeStyle:example3Color, lineWidth:4 },
                connector : "Straight",
                isTarget:true,
                dropOptions : exampleDropOptions,
                beforeDetach:function(conn) {
                    return confirm("Detach connection?");
                },
                onMaxConnections:function(info) {
                    alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
                }
            };

            // setup some empty endpoints.  again note the use of the three-arg method to reuse all the parameters except the location
            // of the anchor (purely because we want to move the anchor around here; you could set it one time and forget about it though.)
            var e1 = instance.addEndpoint('service_1', { anchor:[0.5, 1, 0, 1] }, exampleEndpoint3);

            // setup some DynamicAnchors for use with the blue endpoints
            // and a function to set as the maxConnections callback.
            var anchors = [[1, 0.2, 1, 0], [0.8, 1, 0, 1], [0, 0.8, -1, 0], [0.2, 0, 0, -1] ],
                maxConnectionsCallback = function(info) {
                    alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
                };

            console.log("ddddd");

            var e1 = instance.addEndpoint("service_1", { anchor:anchors }, exampleEndpoint3);
            // you can bind for a maxConnections callback using a standard bind call, but you can also supply 'onMaxConnections' in an Endpoint definition - see exampleEndpoint3 above.
            //e1.bind("maxConnections", maxConnectionsCallback);


            // make .service divs draggable
            instance.draggable(jsPlumb.getSelector(".playground-canvas .service"));

            // add endpoint of type 3 using a selector.
            instance.addEndpoint(jsPlumb.getSelector(".playground-canvas .service"), exampleEndpoint3);



            var detachLinks = jsPlumb.getSelector(".playground-canvas .detach");
            instance.on(detachLinks, "click", function(e) {
                instance.detachAllConnections(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function(e) {
                instance.detachEveryConnection();
                 jsPlumbUtil.consume(e);
            });
        });

        jsPlumb.fire("jsPlumbDemoLoaded", instance);

    });
})();
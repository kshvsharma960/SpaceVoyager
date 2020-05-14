/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function ShowBannerAd(){
    admob.banner.show();
}

function HideBannerAd(){
    admob.banner.hide();
}

function ShowInterrestialAd(){
    admob.interstitial.show();
}

function HideInterrestialAd(){
    //admob.interstitial.hide();
}

 function InitializeAdmob(){
        admob.banner.config({
            id: 'ca-app-pub-8614117558939586/9969186020',
            isTesting:false,
            autoShow:true
        });
        

           // Create banner 
           admob.banner.prepare();

           admob.interstitial.config({
            id: 'ca-app-pub-8614117558939586/6029941017',
            isTesting:false,
            autoShow:false
           });
           
           admob.interstitial.prepare();         
        }

 var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        var exitApp = false,intval = setInterval(function(){
          exitApp=false;
      },1000);
      document.addEventListener('backbutton',function(e){
          e.preventDefault();
          
              if($.state == "menu"){
              if(confirm("Quit?")){
              clearInterval(intval)
              (navigator.app && navigator.app.exitApp())|| (device && device.exitApp())
              }
            }
            
          
          else{
            if($.state=='play'){
                $.setState('pause');
            }
            
            else if($.state=='pause'){
                $.setState('play');
            }
          }
      },false);
      InitializeAdmob();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log("event received : "+id);
    }
};

app.initialize();
package com.elsofto.capacitor.plugins.gsign;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "GSign")
public class GSignPlugin extends Plugin {


    @PluginMethod
    public void signIn(PluginCall call) {
        String clientId = call.getString("serverClientId");

        Log.i("clientId", clientId);

        JSObject ret = new JSObject();
        ret.put("idToken", "value");

        call.resolve(ret);
    }
}

package org.huihui.insertrn;

import android.app.Application;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import cn.reactnative.modules.update.BuildConfig;
import cn.reactnative.modules.update.UpdateContext;
/**
 * User: Administrator
 * Date: 2016-11-22 {HOUR}:06
 */
public class App extends Application{
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected String getJSBundleFile() {
            return UpdateContext.getBundleUrl(App.this);
        }
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage()
            );
        }
    };
}  
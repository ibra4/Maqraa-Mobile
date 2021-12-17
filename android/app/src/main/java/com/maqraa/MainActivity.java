package com.maqraa;

import android.os.Bundle; // here
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here
import com.facebook.react.ReactActivity;

import com.facebook.react.modules.i18nmanager.I18nUtil;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Maqraa";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here

      I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
      sharedI18nUtilInstance.forceRTL(this,true);
      sharedI18nUtilInstance.allowRTL(this, true);
      
      super.onCreate(savedInstanceState);
  }
}

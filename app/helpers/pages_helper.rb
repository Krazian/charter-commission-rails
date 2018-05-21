module PagesHelper
  def bootstrap_class_for(flash_type)
    map = {
      "success"         => "alert-success",
      "error"           => "alert-danger",
      "alert"           => "alert-warning",
      "notice"          => "alert-info",
      "recaptcha_error" => "alert-danger"
    }
    map.fetch(flash_type)
  end
end

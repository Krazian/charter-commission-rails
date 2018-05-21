class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token  
  include Recaptcha::ClientHelper
  include Recaptcha::Verify
  require 'sendgrid-ruby'
  include SendGrid

  def main
    @page = "Home"
  end

  def charter
    @page = "About"
  end

  def jobs
    @page = "Jobs"
  end

  def members
    @page = "Commission Members"
  end

  def staff
    @page = "Staff"
  end

  def contact
    @page = "Contact"
    @status = ""
  end

  def submit_comment
    if params["address"] === "" && params["cell"] === "" && params["phone"] === ""
      if verify_recaptcha
        @status = "Thanks for your comment!"
        @new_comment = Comment.create(message_params)
        
        from = Email.new(email: 'no-reply@charter.nyc')
        to = Email.new(email: 'jc.nycc.122018@gmail.com')
        subject = 'Sending with SendGrid is Fun'
        formatted_message = params[:message].split("\r\n").join("</p><p>")
        content = Content.new(type: 'text/html', value: '<p><b style="text-decouration:underline;">Sender:</b></p><p>'+params[:name]+' (Reply To: <a href="mailto:'+params[:email]+'">'+params[:email]+'</a>)</p><p><b style="text-decouration:underline;">Message:</b></p><p>'+formatted_message+'</p>')
        mail = Mail.new(from, subject, to, content)

        sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers
      else
        @status = "Something went wrong with reCAPTCHA! Please try again."
      end
    end
    render "contact"
  end

  def upcoming
    @page = "Upcoming Hearings"
  end

  def archived
    @page = "Archived Hearings"
  end

  def reports
    @page = "Reports"
  end

  def news
    @page = "News"
  end

  private
    def message_params
      params.permit(:email,:name,:message)
    end
end
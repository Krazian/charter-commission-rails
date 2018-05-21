class AdminsController < ApplicationController
  before_action :find_comment, only: [:message,:update_message]
  before_action :authenticate_user!

  def index
  end

  def all_messages
    @comments = Comment.all
  end

  def message
  end

  def update_message
    @comment.update_attributes(message_params)
    redirect_to admin_messages_path
  end

  private
    def message_params
      params.require(:comment).permit(:email,:name,:message)
    end

    def find_comment
      @comment = Comment.find(params[:id])
    end
end

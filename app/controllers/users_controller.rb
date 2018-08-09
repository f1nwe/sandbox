# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    @users = User.all.last(10)

    respond_to do |format|
      format.pdf { render pdf: 'file' }
      format.html
    end
  end
end

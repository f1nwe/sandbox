# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    @users = User.all.last(8)
  end
end

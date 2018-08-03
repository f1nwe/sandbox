# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    @users = User.all.last(5)

    render(
      pdf:        'template',
      template:   'users/index',
      show_as_html: params.key?('debug'),
      page_size: 'Letter',
      javascript_delay: 10000
    )
  end
end

class User < ApplicationRecord
  validates :email, uniqueness: true
  validates_format_of :email, with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/, allow_blank: true # => /.+@.+\..+/ allows mail like @@.@ to be vaild

end

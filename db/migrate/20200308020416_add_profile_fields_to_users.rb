class AddProfileFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :image, :string
    add_index :users, :email, unique: true
  end
end

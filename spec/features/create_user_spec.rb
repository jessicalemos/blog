require 'rails_helper'

RSpec.feature 'user creation' do 
  scenario 'create a user with a valid name' do
    visit '/users/new'

    fill_in 'Name', with: 'jessica'
    click_button 'Create User'

    expect(page).to have_text 'Users'
    expect(page).to have_text 'jessica'
  end
end 

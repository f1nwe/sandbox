10.times do
  FactoryBot.create(:user,
                    avatar: File.open(
                      Dir[
                        Rails.root.join('spec', 'support', 'images', 'avatars', '*')
                      ].sample
  )
                   )
end

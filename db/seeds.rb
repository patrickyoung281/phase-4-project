# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Word.create!(word_entry: "Hund", definition: "Dog", image_url: "https://clipartix.com/wp-content/uploads/2016/12/Dog-clip-art-pictures-of-dogs.jpg", example_sentence: "Ein Hund im Büro", gender: "m", plural: "Hunde", part_of_speech: "noun", english_translation: "dog")
Word.create!(word_entry: "Auto", definition: "Car", image_url: "https://t3.ftcdn.net/jpg/00/98/39/78/360_F_98397838_6yG3JTvzSdsspf74QztMsS3Xs1ifvYps.jpg", example_sentence: "Ich fahre mit dem Auto", gender: "n", plural: "Autos", part_of_speech: "noun", english_translation: "car")
Word.create!(word_entry: "Kartoffel", definition: "Potato", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD2ePWOI_v4jjHpjXtcDjS4MCtpczikaqAQ&usqp=CAU", example_sentence: "Kannst du ein paar Kartoffel kaufen?", gender: "f", plural: "Kartoffeln", part_of_speech: "noun", english_translation: "potato")
Word.create!(word_entry: "Heft", definition: "Notebook", image_url: "https://png.pngtree.com/png-vector/20201223/ourmid/pngtree-plain-pink-notebook-clipart-png-image_2635602.jpg", example_sentence: "Wo ist dein Heft?", gender: "n", plural: "Hefte", part_of_speech: "noun", english_translation: "notebook")

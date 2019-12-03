# 出力先logの指定
set :output, 'log/crontab.log'
# 実行環境の指定
set :environment, :production

every 1.minute do
  rake 'rake:sample_task:test'
end

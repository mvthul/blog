docker build -t harbor.vthul-it.nl/private/blog:latest .
docker push harbor.vthul-it.nl/private/blog:latest
kubectl config use-context vthul-it
kubectl apply -f .\kubernetes-deployment.yaml
kubectl rollout restart deployment nextjs-blog -n nextjs
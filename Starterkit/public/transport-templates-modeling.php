<?php
// Autoloader relative path to this PHP file
require_once __DIR__.'../../vendor/autoload.php';
//require_once 'layouts/session.php';
require_once "config.php";
use Symfony\Component\HttpClient\HttpClient;
//use Symfony\Component\HttpFoundation\Request;


ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);

$drupalurl = 'https://dev-gametest.pantheonsite.io'; 
$type = $_GET['type'];
$model_type = $_GET['modeltype'];
$drupaltoken = $_POST['token'];
$request = Request::createFromGlobals();
//$host = $request->headers->all();
//$contenttype = $request->headers->get('content-type');
//$bearer = $request->headers->get('Authorization');

//print_r($host);
//echo $contenttype;
//echo $bearer;
//echo $drupaltoken;

/////////START READ TRANSPORT//////////
//////////////////////////////////////

if ($type === 'read') {
//  DRUPAL API Url
$api_url = '' . $drupalurl . '/jsonapi/node/game';

$client = HttpClient::create();
$response = $client->request('GET', $api_url, [
  //'body' => $dataArray,
  'headers' => [
      'Content-Type' => 'application/vnd.api+json',
      'Accept' => 'application/vnd.api+json',
      'Authorization' => 'Bearer ' . $drupaltoken
  ]
]);

$statusCode = $response->getStatusCode();
error_log($statusCode);
$contentType = $response->getHeaders()['content-type'][0];
$content = $response->getContent();


$responsedecode = json_decode($content);
/////GET JSON:API INCLUDED RELATIONSHIPS
$included = $responsedecode->included;


$responseencode = json_encode($responsedecode);
$attrbibutenames = $responsedecode->data;
$included = $responsedecode->included;

$revised_output = array();

foreach($attrbibutenames as $node) {
  //////Do something here if including JSON:API Included/Relationship items etc
  $revised_output[] = $node;
}
    
$revised_encoded = json_encode($revised_output);
$node_data_wrap = '{"data":' . $revised_encoded . '}';
header('Content-Type: application/vnd.api+json');
echo $node_data_wrap;
}

/////////START UPDATE TRANSPORT///////
//////////////////////////////////////

if ($type === 'update') {
  $request = json_decode(file_get_contents('php://input'));
  $updatedNodes = $request->models;

        foreach($updatedNodes as $node) {

            $api_url = '' . $drupalurl . '/jsonapi/node/game/' . $node->id;        
            $node_encode = json_encode($node, JSON_UNESCAPED_SLASHES);
            $node_data_wrap = '{"data":' . $node_encode . '}';


            $client = HttpClient::create();
            $response = $client->request('PATCH', $api_url, [
              'body' => $node_data_wrap,
              'headers' => [
                  'Content-Type' => 'application/vnd.api+json',
                  'Accept' => 'application/vnd.api+json',
                  'Authorization' => 'Bearer ' . $_SESSION["tok"]
              ]
            ]);

            $statusCode = $response->getStatusCode();
            // $statusCode = 200
            //error_log($statusCode);
            $contentType = $response->getHeaders()['content-type'][0];
            // $contentType = 'application/json'
            $content = $response->getContent();
        }

        echo "status: 200";
}


/////////START CREATE TRANSPORT///////
//////////////////////////////////////

if ($type === 'create') {
  $request = json_decode(file_get_contents('php://input'));
  $updatedNodes = $request->models;

        foreach($updatedNodes as $node) {

            unset($node->attributes->revision_timestamp);
            unset($node->attributes->langcode);
            unset($node->attributes->created);
            unset($node->attributes->changed);
            unset($node->attributes->revision_translation_affected);
            unset($node->attributes->path);
            unset($node->relationships);
            $node->type = "node--game";
            $api_url = '' . $drupalurl . '/jsonapi/node/game/' . $node->id;        
            $node_encode = json_encode($node, JSON_UNESCAPED_SLASHES);
            $node_data_wrap = '{"data":' . $node_encode . '}';


            $client = HttpClient::create();
            $response = $client->request('POST', $api_url, [
              'body' => $node_data_wrap,
              'headers' => [
                  'Content-Type' => 'application/vnd.api+json',
                  'Accept' => 'application/vnd.api+json',
                  'Authorization' => 'Bearer ' . $_SESSION["tok"]
              ]
            ]);

            $statusCode = $response->getStatusCode();
            // $statusCode = 200
            //error_log($statusCode);
            $contentType = $response->getHeaders()['content-type'][0];
            // $contentType = 'application/json'
            $content = $response->getContent();
        }

        echo "status: 200";
}


/////////START DELETE TRANSPORT///////
//////////////////////////////////////

if ($type === 'delete') {
  $request = json_decode(file_get_contents('php://input'));
  $updatedNodes = $request->models;

        foreach($updatedNodes as $node) {

            $node->type = "node--game";
            $api_url = '' . $drupalurl . '/jsonapi/node/game/' . $node->id;        
            $node_encode = json_encode($node, JSON_UNESCAPED_SLASHES);
            $node_data_wrap = '{"data":' . $node_encode . '}';


            $client = HttpClient::create();
            $response = $client->request('DELETE', $api_url, [
              'body' => $node_data_wrap,
              'headers' => [
                  'Content-Type' => 'application/vnd.api+json',
                  'Accept' => 'application/vnd.api+json',
                  'Authorization' => 'Bearer ' . $_SESSION["tok"]
              ]
            ]);

            $statusCode = $response->getStatusCode();
            // $statusCode = 200
            //error_log($statusCode);
            $contentType = $response->getHeaders()['content-type'][0];
            // $contentType = 'application/json'
            $content = $response->getContent();
        }

        echo "status: 200";
}


    ?>